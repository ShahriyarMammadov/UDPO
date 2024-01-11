import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import SiteNavigation from "../../components/navigation";
import { Image } from "antd";

const NewsDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="newsDetail">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xəbərlər",
            subcategory: id,
          }}
        />

        <div className="newsImage">
          <Image src="https://udpo.az/uploads/h%C9%99.jpg" alt="Name" />
        </div>
        <div className="newsText">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a
            dolorem illum exercitationem sequi, nobis quaerat dicta harum,
            soluta cum nemo deserunt? Odio libero reiciendis, consequatur facere
            exercitationem nihil voluptatibus aliquid tempore, ipsa illum in
            nostrum ipsum quae nesciunt enim atque ut, incidunt voluptates eum!
            Porro expedita vitae minus vero dolore commodi necessitatibus
            doloremque delectus facere culpa qui nihil, numquam pariatur!
            Laudantium neque eligendi dolorum rem blanditiis, quae culpa sed,
            aliquam quia aperiam, suscipit omnis! Odit magni eius placeat
            voluptates nam dignissimos sed vero accusantium perferendis cum
            pariatur nulla amet tempore voluptate sint, officia rerum ullam
            explicabo, et alias qui vel magnam dolorum. Aperiam molestias
            voluptatum odio a, itaque corporis voluptatem asperiores
            consequuntur numquam ad tempore quas. Labore atque distinctio
            corporis sint quaerat eius illo rem? Incidunt mollitia officiis
            libero vel magni, ipsa, consequuntur ad consequatur et, autem neque
            quasi recusandae provident dignissimos atque nostrum asperiores
            aliquam harum iste vitae? Illo, eos, accusamus ea excepturi delectus
            facilis aliquam adipisci velit laborum harum eligendi impedit, natus
            officiis qui assumenda tenetur! Ipsa alias natus eos nulla nobis
            non. Neque unde veniam quia temporibus recusandae maxime delectus.
            Excepturi cumque quae et iusto cum aliquid nesciunt officiis, neque
            provident ducimus ullam saepe dolorum assumenda esse maxime illum
            fugit eos unde, nisi consequatur sint, facilis suscipit! Distinctio
            earum consequatur, vel natus commodi hic iusto, eius voluptas iste
            eveniet beatae quae placeat corrupti amet odit animi alias quibusdam
            quos at ullam aliquam fuga? Enim quidem ipsum deserunt provident,
            repudiandae aut nulla eius reiciendis? Recusandae iusto id debitis
            qui et fuga in minima, accusamus autem laborum quidem molestias quam
            tenetur aperiam ad maxime, repudiandae porro suscipit quaerat magni
            magnam beatae perferendis veritatis delectus! Ratione impedit
            expedita repudiandae, magni illum, debitis repellendus nobis facere
            possimus ab, voluptate labore tenetur similique ipsum eos quasi
            corporis pariatur corrupti. Numquam blanditiis possimus magni animi,
            reiciendis atque sit nam eos quidem asperiores fugit nesciunt, quis
            rem pariatur natus provident quam sapiente enim nobis, distinctio
            dolorem ex assumenda? Deleniti maxime quidem corporis? Autem
            similique reiciendis, odit obcaecati dignissimos unde dolorum quasi
            enim ratione officia eius delectus nesciunt dolore sapiente iste
            commodi aspernatur ullam deserunt. Impedit, recusandae repudiandae
            accusantium iste nulla ullam necessitatibus non quia dicta
            consequuntur quod. Totam ex esse modi, laboriosam perspiciatis neque
            recusandae ea, dolores enim ab aperiam dignissimos ipsa eligendi.
            Voluptate perspiciatis iure quis distinctio quia. Autem, magnam
            quibusdam. Consequuntur, blanditiis! Veniam non rerum excepturi,
            alias sit error quibusdam et!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
