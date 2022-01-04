import Layout from '../../components/Layout';
import WorkItem from '../../components/WorkItem';
import { API_URL } from '../../config';

interface Props {
    works: any[]
}

export default function WorksPage({works}: Props) {

    console.log(works);

    return (
        <Layout title="TOMO's Works">
            <h1>TOMO's Works</h1>
            {works.length === 0 && <h3>No works to show</h3>}

            {works.map((wor) => (
                <WorkItem key={wor?.id} wor={wor} />
            ))}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/works`);
    const works = await res.json();

    console.log(works);

    return {
        props: {works},
        // revalidate: 2
    }
}