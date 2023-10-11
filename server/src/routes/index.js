import authRouter from './auth'

const initRoutes = (app) => {
    app.use('/api/v1/auth', authRouter)

    return app.use('/', (red, res) => {
        res.send('server on...')

    })
}

export default initRoutes