import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';

const Laporan = () => {
    const [datas, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState("");
    const [tgl_awal, setTglAwal] = useState("");
    const [tgl_akhir, setTglAkhir] = useState("");
    const history = useNavigate()
    const id_outlet = localStorage.getItem('id_outlet')
    const [pageNumber, setPageNumber] = useState(0)
    console.log(tgl_awal)

    const dataPerPage = 10
    const selectedRole = localStorage.getItem('role')
    const pagesVisited = pageNumber * dataPerPage

    useEffect(() => {
        role()
        getData()
    }, [])
    const role = () => {
        if (selectedRole == 'admin' || selectedRole == 'owner') {
            
        } else {
            history('/norole')
        }
    }

    const getData = async () => {
        const response = await axios.post(`http://localhost:8000/transaksi/laporan`, {
            tgl_awal: tgl_awal,
            tgl_akhir: tgl_akhir
        });
        console.log(tgl_awal)
        console.log(response.data)
        setData(response.data)
        setTotal(response.data[0].total)
    }
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    const pageCount = Math.ceil( datas.length / dataPerPage );


  return (
    <>
        <div className="input">
            <h5 className='text-center'>Set Tanggal</h5>
            <form onSubmit={ getData() }>
            <div className="mb-2">
                    <label>Tgl Awal</label>
                    <input 
                        type="date" 
                        name="tgl_awal" 
                        className="form-control" 
                        onChange={(e) => setTglAwal(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label>Tgl Akhir</label>
                    <input 
                        type="date" 
                        name="tgl_akhir" 
                        className="form-control"
                        onChange={(e) => setTglAkhir(e.target.value)}
                    />
                </div>
            </form>
            <div className="mb-2">
                <button className='btn btn-primary' onClick={window.print}>Cetak</button>
            </div>
        </div>
        <div className="table table-responsive">
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Tanggal</td>
                        <td>Kode Invoice</td>
                        <td>Nama Pelanggan</td>
                        <td>Nama Paket</td>
                        <td>Status Pesanan</td>
                        <td>Status Bayar</td>
                        <td>Jumlah</td>
                        <td>Nama Outlet</td>
                        <td>Total Harga</td>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <tr key={data.id_transaksi}>
                            <td>{ index + 1 }</td>
                            <td>{ data.tgl }</td>
                            <td>{ data.kode_invoice }</td>
                            <td>{ data.nama_member }</td>
                            <td>{ data.nama_paket }</td>
                            <td>{ data.status }</td>
                            <td>{ data.dibayar }</td>
                            <td>{ data.qty }</td>
                            <td>{ data.nama }</td>
                            <td>{ data.total_harga }</td>
                        </tr>
                    )) }
                    <tr>
                        <th colspan="9">Total Pemasukan</th>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Laporan