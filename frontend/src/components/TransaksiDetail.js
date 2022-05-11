// import React from 'react'

// const history = useNavigate();
// const [detail_transaksis, setData] = useState([]);
// const {id_transaksi} = useParams();
// const selectedRole = localStorage.getItem('role')
// const role = () => {
//     if (selectedRole == 'admin' || selectedRole == 'kasir') {
        
//     } else {
//         history('/norole')
//     }
// }
// useEffect(() => {
//     role();
//     getData()
// }, [])

// const getData = async () => {
//     const response =  await axios.get(`http://localhost:8000/transaksi/${id_transaksi}`)
//     setData(response.data)
// }

// const TransaksiDetail = () => {
//   return (
//     <div>
//         <div className="mb-2">
//             <label></label>
//         </div>
//     </div>
//   )
// }

// export default TransaksiDetail