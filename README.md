# Jenkins Pipelin Test
## Phase 2: Simple Node Server

The Jenkins pipeline is now configured to build a docker image containing a simple node server, and commit it to a local docker image repository located on the machine running the Jenkins agent.

The node server isn't much more complex than serving a simple static file, together with a makeshift path that returns a simple "Hello World"-style text message.

## Phase 1: Empty Project

The repository at this point contains only a single Jenkinsfile.
The pipeline configured in the file only has 3 stages, each echoing a different command.

