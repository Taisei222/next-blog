// import fs from "fs"
import matter from "gray-matter"
import path from "path"

const postsDirPath = path.join(process.cwd(), "posts")

export function getPosts() {
    const fs = require("fs")
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map((postName) => {
        const postPath = path.join(postsDirPath, postName)
        const result = matter(fs.readFileSync(postPath, "utf8"))

        return result.data
    })
}

export function getIds() {
    const postNames = fs.readdirSync(postsDirPath)

    return postNames.map(postName => {
        return {
            params: {
                id: postName.replace(/\.md$/, "")
            }
        }
    })
}