"use client";
import React, { useEffect, useState } from 'react';
import { Input, Button, Table } from 'antd';
import styles from '../queries/queries.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import api from '../../../axiosInterceptor/axiosInterceptor';
import Link from 'next/link';
import { ReloadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Search } = Input;

const columns = [
    {
        title: 'NAME',
        dataIndex: 'name',
        width: 30,
    },
    {
        title: 'SUBJECT',
        dataIndex: 'subject',
        width: 30,
    },
    {
        title: 'MESSAGE',
        dataIndex: 'message',
        width: 50,
    },
    {
        title: 'COMPANY',
        dataIndex: 'company',
        width: 40,
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        width: 40,
    },
    {
        title: 'CREATED AT',
        dataIndex: 'submissionDateTime',
        width: 40,
    }
];

const ContactTable = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tokenAvailable, setTokenAvailable] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get('/admin/dashboard/contact');
            const result = response.data;
            setData(result);
            setFilteredData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setTokenAvailable(false);
        } else {
            fetchData();
        }
    }, []);

    const onSearch = (value) => {
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    if (!tokenAvailable) {
        router.push('/admin/login');
        return null;
    }

    return (
        <div className={styles.page}>
            <Sidebar />
            <div>
                <h1 className={styles.heading}>CONTACT US</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton
                    className={styles.searchbar} 
                    size="large"
                    onSearch={onSearch}
                />
                <>
                    <Table
                        className={styles.Table}
                        columns={columns}
                        dataSource={filteredData}
                        scroll={{ y: 300 }}
                        loading={loading}
                    />
                    <Button onClick={fetchData} className={styles.button}>
                        <ReloadOutlined style={{ fontSize: '150%' }} />
                    </Button>
                </>
            </div>
        </div>
    );
};

export default ContactTable;
