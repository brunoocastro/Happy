const database = require("./db");
const saveOrphanage = require("./saveOrphanage");

database.then(async (db) => {
  // Inserir dados na tabela
  /* await saveOrphanage(db, {
    lat: "-30.2548147",
    lng: "-54.9266064",
    name: "Lar da Tia Lourdes",
    about: "Crianças de 03 a 18 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "999999999",
    images: [
      "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  }); */

  // Consultar dados da tabela
  const selected = await db.all("SELECT * FROM orphanages");
  console.log(selected);

  /* // Consultar somente um orfanato pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  // Remover dado da tabela
  await db.run("DELETE FROM orphanages WHERE id ='4'") */
});
