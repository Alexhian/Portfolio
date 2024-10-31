import data from "../data.json";


function Main() {
  return (
    <>
      <main className="flex flex-col items-center space-y-8">
        <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur numquam repudiandae. Reprehenderit velit id perferendis doloribus voluptatum quisquam numquam assumenda vitae, dolore ipsa ea aut rem illum expedita deleniti quae rerum error. Nostrum, voluptatibus eligendi expedita dolores recusandae alias placeat distinctio! Consequatur illo odio, at cumque explicabo laborum rem vero aliquam illum ipsam? Possimus facere vero labore! Enim nostrum, tenetur ut dignissimos eveniet tempore, atque iure, odio iste debitis culpa sed error repellendus. Totam repudiandae mollitia, hic aliquid aut neque tempora. Sunt, tenetur minima consequatur accusantium ipsam, alias, sequi illum officia eligendi tempore mollitia repellat quod. Consequuntur veritatis a velit eveniet veniam magnam autem voluptatibus sed saepe facilis harum possimus quod ut assumenda nulla obcaecati provident inventore nihil, repudiandae repellat adipisci facere accusamus? Quam placeat modi repudiandae esse ipsum natus, voluptatum commodi officiis ullam magnam corrupti alias facere. Consectetur voluptas laudantium laboriosam ex iusto voluptates iste molestiae porro, adipisci harum commodi veniam quasi repudiandae libero tempora itaque vitae. Quidem eius aperiam at quas delectus, placeat modi ducimus quis ipsam nobis distinctio ut, ad provident facilis rerum consectetur repellendus temporibus voluptas. Eius, quae. Natus atque ullam quam. Quisquam ducimus consectetur omnis aut tempora quos, illo, asperiores itaque, quia beatae pariatur!</p>
        <div className="flex flex-col items-center p-8 gap-6">
        <a className="" href={data[3].mail}>Mail</a>
        <a href={data[4].github}>Github</a>
        <a href={data[5].likedin}>Likedin</a>
        </div>
      </main>
    </>
  );
}


export default Main