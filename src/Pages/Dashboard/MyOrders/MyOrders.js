import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    const [isDeleted, setIsDeleted] = useState(null);
    const [todayProducts, setTodayProducts] = useState({});

    // https://sheltered-brushlands-89706.herokuapp.com/

    useEffect(() => {
        fetch(`https://secret-dawn-73150.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email, isDeleted]);





    console.log(todayProducts);

    const handleDelete = (id, productId) => {
        console.log(id, productId);
        const confirm = window.confirm("Are you Sure For Delete?")
        if (confirm) {
            // fetch(`http://localhost:5000/deleteOrder?email=${user.email}&id=${id}`, {
            fetch(`https://secret-dawn-73150.herokuapp.com/deleteOrder`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ id: id, email: user.email, productId: productId })
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount) {
                        setIsDeleted(true)
                    } else {
                        setIsDeleted(false)
                    }
                })
        }

    }


    return (
        <div>
            <h1 className='text-center'>My Orders</h1>
            <Box>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell >Product Images</StyledTableCell>
                                <StyledTableCell align="right">Product Name</StyledTableCell>
                                <StyledTableCell align="right">Product Price</StyledTableCell>
                                <StyledTableCell align="right">Quantity</StyledTableCell>
                                <StyledTableCell align="right">Product Statues</StyledTableCell>
                                <StyledTableCell align="right">Order</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {products?.cart?.cartItems.map((data) => (
                                <StyledTableRow key={data._id}>
                                    <StyledTableCell component="th" scope="row" >
                                        <img style={{ height: '80px' }} src={data.img} alt="" />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {data?.product_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">${data?.sell_price}</StyledTableCell>
                                    <StyledTableCell align="right">{data?.cartQuantity}</StyledTableCell>
                                    <StyledTableCell className='text-danger fw-bold' align="right">{products?.status}</StyledTableCell>
                                    <StyledTableCell align="right"><button onClick={() => handleDelete(data._id)} className='button-design'>Cancel</button></StyledTableCell>
                                </StyledTableRow>
                            ))} */}
                            {products.map((product) => product.cart.cartItems.map(data => (
                                <StyledTableRow key={data._id}>
                                    <StyledTableCell component="th" scope="row" >
                                        <img style={{ height: '80px' }} src={data.img} alt="" />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {data?.product_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">${data?.sell_price}</StyledTableCell>
                                    <StyledTableCell align="right">{data?.cartQuantity}</StyledTableCell>
                                    <StyledTableCell className='text-danger fw-bold' align="right">{product?.status}</StyledTableCell>
                                    <StyledTableCell align="right"><button onClick={() => handleDelete(data._id, product._id)} className='button-design'>Cancel</button></StyledTableCell>
                                </StyledTableRow>
                            )))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </div>
    );
};

export default MyOrders;