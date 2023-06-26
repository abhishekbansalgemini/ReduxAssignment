import pen1 from '../Images/Pen1.avif';
import pen2 from '../Images/Pen2.avif';
import pen3 from '../Images/Pen3.avif';
import pen4 from '../Images/Pen4.avif';

export const Products = [
    {
        id: Date.now() + Math.random(),
        title: "Kanwrite Relik Fountain Pen Solid",
        description: "Kanwrite was started in 1986 by the Shri Laxmi Shankar Awasthi, having more than 2 decades of experience in the pen designing and manufacturing industry.",
        price: 4.6,
        img: pen1
    },
    {
        id: Date.now() + Math.random(),
        title: "Kanwrite Desire 35 Fountain Pen Solid Black",
        description: "Kanwrite was started in 1986 by the Shri Laxmi Shankar Awasthi, having more than 2 decades of experience in the pen designing and manufacturing industry.",
        price: 2.1,
        img: pen2
    },
    {
        id: Date.now() + Math.random(),
        title: "Click Aristocrat Fountain Pen CT Black",
        description: "Click Pens was founded by Shri Gokuldas Gangwani in 1978. He started Click Pens after working in the pen manufacturing industry for over two decades. ",
        price: 3.5,
        img: pen3
    },
    {
        id: Date.now() + Math.random(),
        title: "Airmail 444 Fountain Pen Black",
        description: "irmail Wality was established in 1951 in erstwhile Bombay. One of India's oldest manufacturers of writing instruments. Airmail Wality is a favourite of many heads of states and personalities.",
        price: 4.2,
        img: pen4
    }
] || JSON.parse(localStorage.getItem("products"));

