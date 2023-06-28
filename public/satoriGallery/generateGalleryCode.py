import os

path = "/satoriGallery/"
functionName = "GetSatoriGallery"

def main():
    print("Generating gallery code...")
    files = os.listdir(".")
    with open("satoriGallery.ts", "w") as f:
        f.write(f"export function {functionName}() {{\n")
        f.write("\treturn [\n")
        for file in files:
            if file.endswith((".jpg", ".png", ".gif", ".jpeg")):
                    f.write(f'\t\t"{os.path.join(path, file)}",\n')
        f.write("\t];\n")
        f.write("}\n")
    f.close()

if __name__ == "__main__":
    main()