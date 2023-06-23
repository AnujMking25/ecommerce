import React from "react";
import { Container, Image } from "react-bootstrap";
import BandMember from "../../Asset/Band Members.png";
const AboutBody = () => {
  return (
    <Container>
      <Image
        src={BandMember}
        style={{
          width: "200px",
          height: "200px",
          margin: "20px 50px",
          borderRadius: "50%",
          float: "left",
        }}
      />
      <p style={{margin:'20px',color:'#777',fontSize:'17px',fontWeight:'400',textAlign:'justify'}}>
        We help people achieve independence by making it easier to start, run, and 
        grow a business. We believe the future of commerce has more voices, not fewer,
        so we’re reducing the barriers to business ownership to make commerce better
        for everyone.
        they are refused to the pleasures and the pleasures of the pain, explain
        the treatment of excepturi of the blessed sufferings. I never said will
        unfold in him receives at another time he may please the one that those
        works, we are less than they, this refused to the pleasures of deleniti?
        Those are! Will unfold in times of pleasure, this pain will be a right
        enjoyed by corrupt, are accusing him of all pleasures, and seek his own,
        or, to the needs of the agony of the choice. We hate the fellow. 
        <br/>
        Lorem
        ipsum dolor, sit amet consectetur rebates. The distinction, that arise
        from or to. The greater, therefore, an obstacle to the duties of the
        debts receives the very great importance to us that these are consequent
        to that question is answered, which was selected for the fault, it is
        often one of us, however, have any! Moreover, this is often not at once
        take the hardships of the life of harsh condemn, we are accusing him?
        Him whom something large cisterns.
      </p>
    </Container>
  );
};

export default AboutBody;
