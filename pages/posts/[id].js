//http://~~.~~/posts/[id]

import Layout from "../../components/layout";

import { getIds } from "../../lib/posts"

export const getStaticPath = () => {
    return {
        paths: getIds(),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            params: params
        }
    }
}

export default function Post({ params }) {
    return (
        <Layout pageTitle={"Article"}>
            <h2>Article</h2>
            {params.id}
        </Layout>
    )
}