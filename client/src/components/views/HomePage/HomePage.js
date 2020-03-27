import React from "react";
import { Carousel } from "antd";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function HomePage() {
  return (
    <Layout>
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Bienvenido!</h2>
        </div>
        <Carousel autoplay>
          <div>
            <img src='data:image/jpeg;base64,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'></img>
          </div>
          <div>
            <img src='data:image/jpeg;base64,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'></img>
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI8u9Qn4OCIDJ9FbPpKhMKWQyvbyMOYpJvLOBw_jM27KCQ14vc'></img>
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8lZjmnfoGs12dYVd7CS8VdqI_dVj4a0Cfd_ysZkepF3niVcgK'></img>
          </div>
        </Carousel>
      </div>
    </Layout>
  );
}

export default HomePage;
