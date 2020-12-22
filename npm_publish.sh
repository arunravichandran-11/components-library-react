# establish branch and tag name variables
devBranch=develop


# current Git branch
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
tagVersion=v$1;
echo $branch $tagVersion

function publish_to_npm {

    if [ -z "$tagVersion" ]
    then
        echo "Please switch to corresponding tag before publishing to npm"
    else
    # checkout to tag - need this later
    # git checkout $tagVersion
    
    # Now latest tag version is switched and new code is there. So Switch to doc-site
    cd ./docs-site/

    # Run command to create lib folder:
    npm run ready
    cd ..

    # publish the code to npm.
    npm publish

    # After publishing , move to develop branch.
    git checkout develop

}

if [ $branch == $devBranch ]
then
   publish_to_npm
else
   echo "Please switch to develop branch"

fi