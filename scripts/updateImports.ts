import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = [
        "app",
        "shared",
        "entities",
        "features",
        "widgets",
        "pages",
    ];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclaratoins = sourceFile.getImportDeclarations();
    importDeclaratoins.forEach((dec) => {
        const value = dec.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            dec.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
