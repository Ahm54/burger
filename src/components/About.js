import React from "react";
import burgerabout from "../assets/burgerhakkimizda.jpg";
import '../styles/About.css'

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${burgerabout})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          enim sodales, tempor nisi id, feugiat urna. Fusce sed facilisis eros.
          Vivamus vel consectetur urna, vel commodo lectus. Suspendisse suscipit
          nulla odio, mollis auctor mauris ultrices sed. Nullam facilisis
          dapibus velit, vehicula accumsan ipsum. Pellentesque purus mauris,
          vehicula eget purus efficitur, rhoncus blandit eros. Cras egestas urna
          sed pulvinar finibus. Duis velit ante, egestas a lobortis non,
          sagittis a augue. Morbi non augue egestas, accumsan libero et, sodales
          tortor. Donec scelerisque sit amet lectus eget interdum. Etiam
          malesuada leo nec purus lacinia, a ultricies dolor viverra. Curabitur
          tincidunt, metus pulvinar aliquet mollis, arcu enim tincidunt ipsum,
          eu dignissim purus lorem non lacus. Etiam vestibulum, mauris a
          tincidunt semper, arcu nisl convallis lacus, vel ornare quam sapien
          eget lacus. Integer et tortor turpis. Proin sed felis at justo
          consectetur finibus. Praesent pharetra sem ligula. Nam vel fringilla
          ipsum. Nam tempus cursus risus, sit amet pretium erat rhoncus eu.
          Aenean pulvinar eget ex efficitur luctus. Nulla facilisi. Proin
          tincidunt orci quis lectus feugiat, quis tempus magna aliquam. Ut
          lobortis, diam quis venenatis iaculis, sem arcu tempus diam, eget
          dapibus arcu nunc a erat. Duis commodo diam in finibus eleifend.
          Praesent cursus ultrices ipsum, ac dapibus neque interdum et.
          Phasellus justo eros, ultricies dignissim bibendum quis, imperdiet
          eget quam. In cursus congue nisl, eu ornare magna aliquam id. Proin
          quam odio, consequat varius convallis id, posuere id orci. Nulla et
          porttitor risus. Proin pulvinar sem id blandit ultrices. Nullam sed
          dolor euismod mauris molestie dictum. Nulla elementum consectetur
          pulvinar. Pellentesque eget condimentum mi. Quisque mauris enim,
          luctus id enim sed, mattis ultrices est. Aliquam non neque accumsan,
          ultricies lectus ultrices, hendrerit nisl. Nullam porta lectus
          pulvinar justo faucibus, in elementum leo pharetra. Nullam ultricies
          odio interdum ex porta tincidunt. Duis viverra, tellus ac lobortis
          sollicitudin, nulla libero efficitur tortor, non vestibulum libero
          tellus dapibus felis. Praesent non sagittis magna, vitae suscipit
          magna. Donec nec ante laoreet, luctus neque eget, fermentum odio.
          Quisque placerat lacus sed diam luctus, ullamcorper vehicula eros
          tincidunt. Nam condimentum imperdiet tortor in imperdiet. Nullam
          laoreet volutpat tellus, id fermentum ex bibendum et.
        </p>
      </div>
    </div>
  );
};

export default About;
