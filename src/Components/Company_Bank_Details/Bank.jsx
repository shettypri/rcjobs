import React from 'react';

const Bank = () => {
    return (
        <>
            <div className="bg-white drop-shadow-lg rounded-md border-2">
                <table className="py-4  my-4 w-[600px]">
                    <tbody>
                        <tr className="my-2">
                            <th>ACCOUNT NAME:</th>
                            <td> RELIABLE RIGHT CLICK INDIA LLP</td>
                        </tr>

                        <tr className="my-2">
                            <th>ACCOUNT NUMBER:</th>
                            <td> 198 620 100 0124</td>
                        </tr>

                        <tr className="my-4">
                            <th>IFSC:</th>
                            <td>CNRB0001986</td>
                        </tr>

                        <tr className="my-4">
                            <th>BRANCH NAME:</th>
                            <td>NRI BRANCH UDUPI</td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </>
    );
}

export default Bank;