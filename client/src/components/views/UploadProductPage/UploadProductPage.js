import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Marcas = [
  { key: 1, value: "Apple" },
  { key: 2, value: "Xiaomi" },
  { key: 3, value: "Huawei" },
  { key: 4, value: "Motorola" },
  { key: 5, value: "Sony" },
  { key: 6, value: "Samsung" },
  { key: 7, value: "Nokia" }
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [StockValue, setStockValue] = useState(0);
  const [MarcaValue, setMarcaValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = event => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = event => {
    setPriceValue(event.currentTarget.value);
  };

  const onMarcaSelectChange = event => {
    setMarcaValue(event.currentTarget.value);
  };

  const onStockChange = event => {
    setStockValue(event.currentTarget.value);
  };

  const updateImages = newImages => {
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !MarcaValue ||
      !StockValue ||
      !Images
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      marca: MarcaValue,
      stock: StockValue
    };

    Axios.post("/api/product/uploadProduct", variables).then(response => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Agregar Producto</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <Input onChange={onPriceChange} value={PriceValue} type='number' />
        <br />
        <br />
        <br />
        <br />
        <label>Stock</label>
        <Input onChange={onStockChange} value={StockValue} type='number' />
        <br />
        <br />
        <select onChange={onMarcaSelectChange}>
          {Marcas.map(item => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
