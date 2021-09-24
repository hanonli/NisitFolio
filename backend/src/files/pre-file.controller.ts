import { Post, Get, Param, Res, Controller, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiConsumes, ApiTags,ApiBody} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';


@Controller('/attachment/files')
@ApiTags('Attachments')
export class FilesController {    
    @Post('')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            comment: { type: 'string' },
            outletId: { type: 'integer' },
            file: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      required: true, description: 'Attachment Files'})
    
    @UseInterceptors(FilesInterceptor('file'))
    upload(@UploadedFiles() files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                encoding: file.encoding,
                mimetype: file.mimetype,
                id: file.id,
                filename: file.filename,
                metadata: file.metadata,
                bucketName: file.bucketName,
                chunkSize: file.chunkSize,
                size: file.size,
                md5: file.md5,
                uploadDate: file.uploadDate,
                contentType: file.contentType,
            };
            response.push(fileReponse);
        });
        return response;
    }
}