import PageHeading from '@/common/PageHeading';
import { useEffect, useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Modal from '@/common/Modal';
import FormProduct from '@/components/FormProduct';
import axios from 'axios';
import Link from 'next/link';
import endPoints from '@/services/api';
import useAlert from '@/hooks/useAlert';
import Alert from '@/common/Alert';
import { deleteProduct } from '@/services/api/products';
import Image from 'next/image';

export default function Products() {
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState([]);
    const { alert, setAlert, toggleAlert } = useAlert();

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(endPoints.products.getAllProducts);
            setProducts(response.data);
        }
        try {
            getProducts();
        } catch (error) {
            //console.log(error);
        }
    }, [alert]);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setAlert({
                active: true,
                message: 'Product deleted successfully',
                type: 'success',
                autoClose: true,
            });
        } catch (error) {
            setAlert({
                active: true,
                message: 'Error deleting product',
                type: 'error',
                autoClose: true,
            });
        }
    };

    return (
        <>
            <Alert alert={alert} onClose={toggleAlert} />
            <PageHeading
                title="List of products"
                actions={[
                    {
                        name: 'Add new product',
                        icon: <PlusIcon />,
                        bgColor: 'indigo-600',
                        color: 'white',
                        bgHoverColor: 'indigo-500',
                        onClick: () => setOpenModal(true),
                    },
                ]}
            />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.map((product) => (
                                        <tr key={`product-id-${product.id}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <Image
                                                            className="h-10 w-10 rounded-full"
                                                            src={
                                                                product
                                                                    ?.images[0]
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {product.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {product.category?.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {product.price}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link
                                                    href={`/dashboard/edit/${product.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <TrashIcon
                                                    className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer"
                                                    aria-hidden="true"
                                                    onClick={() =>
                                                        handleDelete(product.id)
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openModal} setOpen={setOpenModal}>
                <FormProduct setOpen={setOpenModal} setAlert={setAlert} />
            </Modal>
        </>
    );
}
