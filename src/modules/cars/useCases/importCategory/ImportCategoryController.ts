import { Request, Response} from 'express'

class ImportCategoryController {
    constructor(private importCategoryUseCase){}
    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUseCase.execute(file)
        
        return response.send()
    }
}

export { ImportCategoryController}