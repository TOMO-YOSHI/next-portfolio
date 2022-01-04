import { useRouter } from 'next/router';
import { API_URL } from '../../config';

export default function WorkPage({wor}) {
    const router = useRouter();

    console.log(router)

    return (
        <div>
            <h1>My Work1</h1>
            <p>{router.query.id}</p>
            <p>{wor.name}</p>
        </div>
    )
}

export async function getServerSideProps({query: { id }}) {
    const res = await fetch(`${API_URL}/api/works/${id}`)
    const works = await res.json();

    return {
        props: {
            wor: works[0]
        }
    }
}