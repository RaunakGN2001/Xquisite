import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0; // to prevent caching 

const HomePage = async () => {

    const billboard = await getBillboards('6cac83e1-b534-4128-b495-28b03f737b8b');

    return ( 
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;