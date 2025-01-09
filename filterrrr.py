import re as re

regex = "^(.+)(Temp C: )(\d+\.\d+)(.*)$"

values:list[str] = []

with open("./test/dgdg.txt", "r") as file:
    for line in file.readlines():
        find = re.search(regex, line)
        if find == None:
            pass
        else:
            values.append(find.group(3))

with open("./filterrrrResult.txt", "a") as file:
    for element in values:
        file.write(element.replace(".", ",") + "\n")