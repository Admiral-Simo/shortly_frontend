import os

def print_file_content(file_path):
    # Open file
    with open(file_path, 'r') as file:
        # Read file content
        content = file.read()
        # Print file content
        print(content)

def visit_dirs(folder_path):
    # Loop through files and directories
    for root, _, files in os.walk(folder_path):
        for file_name in files:
            # Get relative file path
            rel_file_path = os.path.relpath(os.path.join(root, file_name), folder_path)
            # Print relative file path in format "relative_path"
            print(f'"this file is located at : {rel_file_path}"')
            # Print file content
            print_file_content(os.path.join(root, file_name))

def main():
    # Accept folder path from user input
    folder_path = "."
    # Call function to loop through files
    visit_dirs(folder_path)

if __name__ == "__main__":
    main()
