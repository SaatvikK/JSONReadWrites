import json

Name = "Saatvik"
Age = 16
Height = 1.6
data = {
  "Name": Name,
  "Age": Age,
  "Height": Height
}

with open(r'C:\Users\sat.rk\Documents\Desktop\DesktopStuff\Visual Studio Projects\VS Code\ThisWorkspace\NewShitForOtherLangs\JSON\exampleDB.json', 'w') as outfile:
    json.dump(data, outfile)