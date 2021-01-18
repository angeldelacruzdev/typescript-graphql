import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  InputType,
  Int,
} from "type-graphql";

import { Product } from "../entity/Product";

@InputType()
class ProductInput {
  @Field()
  name!: string;
  @Field()
  qty!: number;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;
  @Field(() => Int, {nullable: true}) 
  qty?: number;
}


@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    const newProduct = Product.create(variables);
    return await newProduct.save();
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => Int) id: number) {
    await Product.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
  ) {
    await Product.update({id}, fields);
    return true;
  }

  @Query(() => [Product])
  products() {
    const result = Product.find();
    return result;
  }
}
