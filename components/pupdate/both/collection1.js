
export const Images=new FS.Collection("images",{
  stores:[new FS.Store.FileSystem("images",{path:"~/uploads2"})]
});

Images.allow({
  insert:function(){
    return true;
  },
  update:function(){
    return true;
  },
  remove:function(){
    return true;
  },
  download:function(){
    return true;
  }
});
