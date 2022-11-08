import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Counter from '../components/counter/Counter';


export default function Home() {
  return (
    <div className={styles.container}>
      <Counter />   
    </div>
  )
}
