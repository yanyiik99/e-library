import React from "react";
import TeamCard from "../../components/CardMember";
import Adam from "../../images/Adam.jpg";
import Ari from "../../images/Ari.jpeg";
import Dimas from "../../images/Dimas.jpeg";
import Krisna from "../../images/krisna.jpeg";
import Alip from "../../images/Alip.jpeg";
import Member from "../../images/member.jpeg";
import Logo1 from "../../images/OUR-TEAM.png";
import Logo2 from "../../images/ONECA-1.png";
import Logo3 from "../../images/ONECA.png";
import "./Team.css"

const Team = () => {
    return (
        <>
        <div className="title">
            <h1>Meet Our Team</h1>
        </div>
        <div className="team-card">
            <TeamCard foto={Ari} nama="Ari Pramana" background="Sistem Informasi Universitas Pendidikan Ganesha"
            work="Front-end Web HMJ Sistem KRS" hobby="Jogging" />
            <img src={Logo1} alt="Our Team" />
            <TeamCard foto={Adam} nama="Adam Yahya A. H." background="Informatika UIN Suka"
            work="DBA Biro Kepegawaian PUPR" hobby="Hiking, Gaming" />
        </div>
        <div className="team-card">
            <TeamCard foto={Dimas} nama="Dimas" background="Teknik Informatika Universitas Esa Unggul"
            work="ASAP" hobby="Olahraga, Musik" />
            <img src={Logo2} alt="ONECA" />
            <TeamCard foto={Krisna} nama="Krisna G. Pryuda" background="STMIK Mardira Indonesia Bandung"
            work="Soon" hobby="Workout, Gaming, Watching Movie" />
        </div>
        <div className="team-card">
            <TeamCard foto={Alip} nama="Alip" background="Universitas Brawijaya"
            work="SOON..." hobby="Jogging" />
            <img src={Logo3} alt="ONECA" />
            <TeamCard foto={Member} nama="Abdul (Missing)" background="UNKNOWN"
            work="UNKNOWN" hobby="UNKNOWN" />
        </div>
        </>
    )
}

export default Team;