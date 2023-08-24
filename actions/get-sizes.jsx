const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async () => {
    const response = await fetch(URL);

    return response.json();
}

export default getSizes;