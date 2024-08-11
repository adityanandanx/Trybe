# Trybe - Extensive Reach and Seamless Coordination for your club
Trybe connects you to event sponsors and helps you to manage tasks for seamless collaboration within your team. 


## Features:
1. Get sponsorships for your events
2. Keep track of tasks
3. Plan out events in advance

## Tech Stack
- **Backend:** Django, Django Rest Framework
- **Frontend:** Nextjs 14, ShadcnUI

## Development setup:
### Pre-requisites:
- [Python 3.10 or later](https://www.python.org/downloads/)
- [Node 18.18 or later](https://nodejs.org/en/download/package-manager/current)
- [pnpm](https://pnpm.io/installation)

### Steps:
- Clone the repo
    ```bash
    git clone https://github.com/adityanandanx/Trybe
    cd Trybe
    ```
#### Backend Setup
1. Setup [python virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments) named `.venv`:
    ```bash
    python -m venv .venv
    ```
2. Activate the environment (Only run the command corresponding to your OS/shell):
    - Mac/Linux:
    ```bash
    source .venv/bin/activate
    ```
    - Windows Powershell:
    ```bash
    .venv\Scripts\Activate.ps1
    ```
    - Windows Cmd:
    ```bash
    .venv\Scripts\Activate.bat
    ```
3. Install python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run django development server:
    ```bash
    cd backend
    python manage.py runserver
    ```

#### Frontend Setup
1. Install dependencies:
    ```bash
    cd frontend
    pnpm install
    ```
2. Run nextjs development server:
    ```bash
    pnpm dev
    ```

##### Note
In order to fix the following error while the setup

about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ .venv\Scripts\Activate.ps1
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess 

Run the command :

Set-ExecutionPolicy Unrestricted -Scope Process
