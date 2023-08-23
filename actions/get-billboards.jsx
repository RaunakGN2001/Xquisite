const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;


const getBillboards = async (id) => {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
}

export default getBillboards;