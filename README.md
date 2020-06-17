# vscode-docker-playground

This project is a simple example of what you will need to remote debug a nodejs application running in a docker container.

The key elements are that you expose port 9229 (default inpsect port) and use the inspect flag in your package.json.

VSCodes debug extension will automatically pick up the entry point command if its specified as start in the package.json.

* Build the image from the Dockerfile in the root
* Run the container 
* Add a breakpoint in index.js
* From the Debug tab on the left there should be a run button at the top that says "Docker: Attach to Node" with a green triangle
* Click the green triangle
* Navigate to http://localhost:3000/ in your browser
* VSCode Debugger should pause execution on your breakpoint


## Extensions

### Docker

VSCode has some interesting ways of working with docker.

The first extension I would recommend, especially if you are not familar yet with docker commands is the Docker extension.

It will give you a visual indicator directly in the IDE on which containers are running.

### Remote - Containers

Allows you to use a Docker container as a development environment. 

Install the Remote - Containers extensions

VSCode will auto detect the devcontainer configuration file and prompt you to reload in container. Please do so. You can also trigger this from the green button on the bottom left corner of VSCode <>.

## Further Reading
https://code.visualstudio.com/docs/containers/debug-node
https://code.visualstudio.com/docs/remote/containers