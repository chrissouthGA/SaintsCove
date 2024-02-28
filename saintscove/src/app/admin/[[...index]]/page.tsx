'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
import AdminNavBar from '../../../../components/AdminNavBar';


export default function AdminPage() {
    return (
        <div>
            <AdminNavBar />
            <NextStudio config={config} />
        </div>

    )
}
