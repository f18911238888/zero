## ztnet installation script

This is the code and installation scripts running at install.ztnet.network.

### Installation Steps for Debian and Ubuntu

1. Open a terminal window.
2. Install curl if it is not already installed:
   ```bash
   sudo apt update && sudo apt install curl
   ```
3. Run the following command to download and execute the installation script:

   **!NOTE:** if you system does not have sudo installed, you will need to run the script as root and remove the sudo from the command below.

   ```bash
   curl -s http://install.ztnet.network | sudo bash
   ```

4. Follow any on-screen instructions to complete the installation.

After completing these steps, ztnet should be successfully installed on your system.

### Running the Server (Development)

To run the server, follow these steps:

1. Install the dependencies:

   ```bash
   npm install
   ```

2. To start the server in development mode, run:

   ```bash
   npm run start
   ```

3. To build the project, run:
   ```bash
   npm run build
   ```

These commands are specified in the `package.json` under the `scripts` section.
