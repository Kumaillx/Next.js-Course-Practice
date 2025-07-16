//used to make the component a client component
// "use client";

export default async function UserPage({
    params,
}:{
    params: Promise<{userId: string}>;
}) {

    const { userId } = await params;
    return <div> {userId} </div>
}
