export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './onixCode.service';
import { OnixCodeService } from './onixCode.service';
export * from './product.service';
import { ProductService } from './product.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthControllerService, OnixCodeService, ProductService, UserService];
