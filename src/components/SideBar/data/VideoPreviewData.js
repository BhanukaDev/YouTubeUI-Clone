const videoData = [
  'https://media.giphy.com/media/Rl11JMLCkfqo0/giphy.gif?cid=ecf05e47vfk4c02wes1nci0tikt184z74tgm2oji0z7foooq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/m42puyWKGvuJW/giphy.gif?cid=ecf05e47vfk4c02wes1nci0tikt184z74tgm2oji0z7foooq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/K5mhAi01uxnos/giphy.gif?cid=ecf05e47vfk4c02wes1nci0tikt184z74tgm2oji0z7foooq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/iv895YWveVRTpi2h6x/giphy.gif?cid=ecf05e4758tl6lnuep83fykub6ogkagufcaexwc2hrquffcn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/RGRn5tmZQDGHYYOcq7/giphy.gif?cid=ecf05e4758tl6lnuep83fykub6ogkagufcaexwc2hrquffcn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/eSQKNSmg07dHq/giphy.gif?cid=ecf05e473172ud2baqip4ndzgvy9ndkedwak1xypsnd94d26&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/SasDDqOSRclNu/giphy.gif?cid=ecf05e473172ud2baqip4ndzgvy9ndkedwak1xypsnd94d26&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif?cid=ecf05e47uu851xkstg46djk1gmy8ipup3gary06s0uts69q5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/GgnBHd3mHS6BIrUkTV/giphy.gif?cid=ecf05e47uu851xkstg46djk1gmy8ipup3gary06s0uts69q5&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/qkO3T18xBrfQGv6KZi/giphy.gif?cid=ecf05e47o0sa5ajuqf7odkvq6gw35yd4sy965bf8ttyjzeam&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/wsQhZMddtnwvH91lbl/giphy.gif?cid=ecf05e47s902gjcz0l8ecjz9rr9x3i6g525drb6oz7tq02u4&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif?cid=ecf05e47ve0qkoq1l0gkgcg78xxci0t8vjb3ayb7g3ouvd88&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/zpiiG5WD4ZltDOfZVN/giphy.gif?cid=ecf05e47ve0qkoq1l0gkgcg78xxci0t8vjb3ayb7g3ouvd88&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/duNowzaVje6Di3hnOu/giphy.gif?cid=ecf05e47vq7fn4ch7d9lvutz9ad2tbf5a0louifo7phipvw3&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/mnLfS6f5xO4ammJGuY/giphy.gif?cid=ecf05e47vq7fn4ch7d9lvutz9ad2tbf5a0louifo7phipvw3&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47e5qs6gqi7mqdwks7ayiihkk58oi95exiyk0cqurh&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif?cid=ecf05e47e5qs6gqi7mqdwks7ayiihkk58oi95exiyk0cqurh&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif?cid=ecf05e47e5qs6gqi7mqdwks7ayiihkk58oi95exiyk0cqurh&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/bAQH7WXKqtIBrPs7sR/giphy.gif?cid=ecf05e47e5qs6gqi7mqdwks7ayiihkk58oi95exiyk0cqurh&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/uB86ZyWQsnFSGYe2sA/giphy.gif?cid=ecf05e47d9o2ccdqz8utvigjl26q5mxm5j5uxw9dbx3ijxvw&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/Gtw1IW0yk3RJLGHXFY/giphy.gif?cid=ecf05e47d9o2ccdqz8utvigjl26q5mxm5j5uxw9dbx3ijxvw&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/lXHwJv89PvdN200Anr/giphy.gif?cid=ecf05e47r1bzbwy4dmp0k93qkyn0fwr8vf3a1b7qeo4yyqro&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/k3W3kpglwqyOg14Eoz/giphy.gif?cid=ecf05e47r1bzbwy4dmp0k93qkyn0fwr8vf3a1b7qeo4yyqro&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/lGD7VxrtwNalqhx68w/giphy.gif?cid=ecf05e47vkglfu9a0p7sytut1au5v7zd7uuklh5zdxhxihhs&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/SYHz66JfYHbBtZXjHy/giphy.gif?cid=ecf05e47hytyr4ph9kfrp6vzrr12nqqsdqcxt5w846qa40ht&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.giphy.com/media/jmYJF3hGctoOI/giphy.gif?cid=ecf05e47pjp9vgf5bd3c09r2586pra9ghalsaqr06tbcrv1m&ep=v1_gifs_search&rid=giphy.gif&ct=g',
];

export default videoData;
