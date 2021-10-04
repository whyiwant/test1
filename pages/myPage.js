import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function myPage() {
	return <div className={styles.container}>Hello World!!!</div>;
}
