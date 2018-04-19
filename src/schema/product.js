const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList} = graphql;
const fs = require("fs");
const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLID},
        desc: {type: GraphQLString},
        pack_desc: {type: GraphQLString},
        w: {type: GraphQLString},
        mrp: {type: GraphQLString},
        sp: {type: GraphQLString},
        images: {type: new GraphQLList(ImageType)}
    })
});

const ImageType = new GraphQLObjectType({
    name: "Image",
    fields: () =>({
        ml: {type:GraphQLString},
        s: {type:GraphQLString},
        l: {type:GraphQLString}
    })
});

const ProductQuery = new GraphQLObjectType({
    name: 'ProductQueryType',
    fields: {
        product: {
            type: ProductType,
            args: {id: {type:GraphQLID}},
            resolve(parent, args){
                console.log(args.id)
                var product = {  
                    "id":40037503,
                    "desc":"Freshly Baked - Plain Bagel",
                    "pack_desc":"Pack of 3",
                    "w":"250 gm",
                    "mrp":"39.00",
                    "sp":"29.25",
                    "images":[  
                       {  
                          "ml":"/p/ml/40037503_1-fresho-signature-freshly-baked-plain-bagel.jpg",
                          "s":"/p/s/40037503_1-fresho-signature-freshly-baked-plain-bagel.jpg",
                          "l":"/p/l/40037503_1-fresho-signature-freshly-baked-plain-bagel.jpg"
                       }
                    ]};
                return product;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: ProductQuery
});

