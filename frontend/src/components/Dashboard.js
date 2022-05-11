import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [member, setMember] = useState('')
    const [outlet, setOutlet] = useState('')
    const [transaksi, setTransaksi] = useState('')
    const [transaksis, setDataTransaksi] = useState([])
    const [total, setTotal] = useState('')
    

    const displayData = transaksis
    .map((transaksi, index) => {
        return (
            <tr key={transaksi.id_transaksi}>
                <td>{index +1}</td>
                <td>{transaksi.kode_invoice}</td>
                <td>{transaksi.nama_member}</td>
                <td>{transaksi.nama_paket}</td>
                <td>{transaksi.qty}</td>
                <td>{transaksi.status}</td>
                <td>{transaksi.dibayar}</td>
                <td>{transaksi.total_harga}</td>
                <td className="text-center">
                    <Link to={`/transaksi/ubah/${transaksi.id_transaksi}`} className="btn btn-primary mr-3">Ubah Status</Link>
                </td>
            </tr>
        )
    })
    useEffect(() => {
        getMember();
        getDataTransaksi();
        getTransaksi();
        getOutlet();
    }, [])


    const getMember = async () => {
        const response = await axios.get('http://localhost:8000/transaksi/countmember');
        setMember(response.data[0].member)
        console.log(response.data[0].member)
    }
    const getDataTransaksi = async () => {
        const response = await axios.get('http://localhost:8000/transaksi/newest', {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        });
        setTotal(response.data[0].total)
        setDataTransaksi(response.data)
        console.log(response.data)
    }
    const getTransaksi = async () => {
        const response = await axios.get('http://localhost:8000/transaksi/counttransaksi');
        setTransaksi(response.data[0].jumlah)
        console.log(response.data[0].jumlah)
    }
    const getOutlet = async () => {
        const response = await axios.get('http://localhost:8000/transaksi/countoutlet');
        setOutlet(response.data[0].outlet)
        console.log(response.data[0].outlet)
    }
  return (
    <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Outlet</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{outlet}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Pelanggan</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{member}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Transaksi</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{transaksi}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="table table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Invoice</th>
                        <th>Member</th>
                        <th>Paket</th>
                        <th>Jumlah</th>
                        <th>Status</th>
                        <th>Pembayaran</th>
                        <th>Total Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData}
                    <tr>
                        <th colspan="7  ">Total Pemasukan</th>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Dashboard