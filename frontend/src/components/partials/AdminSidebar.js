import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    const [tgl_awal, setTglAwal] = useState('')
    const [tgl_akhir, setTglAkhir] = useState('')
  return (
    <>
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to='/'>
                    <div className="sidebar-brand-text mx-3">RizkiGroups</div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to='/user'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>User</span>
                    </Link>
                    <Link className="nav-link" to='/member'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Member</span>
                    </Link>
                    <Link className="nav-link" to='/transaksi'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Transaksi</span>
                    </Link>
                    <Link className="nav-link" to='/paket'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Paket</span>
                    </Link>
                    <Link className="nav-link" to='/outlet'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Outlet</span>
                    </Link>
                    <Link className="nav-link" to='/laporan'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Laporan</span>
                    </Link>
                    
                </li>

                <hr className="sidebar-divider" />
                <li className="nav-item text-center">
                    <Link className="btn btn-primary" to='/logout'>
                        <span>Log Out</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Input Tanggal</h5>
                    </div>
                    <input 
                        type="date" 
                        name="tgl_awal" 
                        className="form-control" 
                        onChange={(e) => setTglAwal(e.target.value)}
                    />
                    <input 
                        type="date" 
                        name="tgl_akhir" 
                        className="form-control"
                        onChange={(e) => setTglAkhir(e.target.value)}
                    />
                    <div className="mb-5"></div>
                    <a href={`/laporan`} className="btn btn-primary">General Laporan</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminSidebar