
 const PORT=process.env.PORT || 5000
 const DB_HOST=process.env.DB_HOST || '184.168.109.253'
 const DB_USER=process.env.DB_USER || 'aiotylabs'
 const DB_PASSWORD=process.env.DB_PASSWORD || 'aiotylabs2020!'
 const DB_NAME=process.env.DB_NAME || 'aioty'
 const DB_PORT=process.env.DB_PORT || 3306

module.exports={
    PORT,DB_HOST,DB_USER,DB_PASSWORD,DB_NAME,DB_PORT
}