import React, { useState } from "react";
import { Message } from "semantic-ui-react";

export default function Reading() {

  const [showMessage, setShowMessage] = useState(true);

  const handleShow = () => {
    setShowMessage(false);
  }

  return (
    <div>
      <div>
        <h1>Okuma Hatası Testi</h1>
        {showMessage ? <Message onDismiss={()=>handleShow()} content='Bu testler ön bilgilendirme amaçlı oluşturulmuştur. Doğru bir teşhis için uzman ile görüşmelisiniz.'></Message> : <div></div>}
      </div>
    </div>
  );
}
