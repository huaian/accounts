1、根据pc项目和h5项目进行细分，把当前模板层的样式写在对应在项目下

2、使用sass+compass 编辑工具,sass---util文件有公用编译方法（类似px单位转换rem，css3前缀自动添加）

3、每个样式根据模板进行细分，一个模板对应一个样式文件为了避免样式名称的重复每个样式文件都有自己的命名空间

  .login{
    .userName{
        color:red;
    }
  }

  .index{
    .userName{
        color:blue;
    }
  }

4、样式中会定义公用变量类似主色调 $main-color:#f74e61; 方便需求更改整体主色调

5、项目中都对应一个z-index.scss文件，文件里写了整个模板样式文件的z-index属性
方便我们更快的找到因为z-index原因元素被遮挡，更好的控制所有元素的z-index的数据（尽量保证我们写的样式的z-index数值在0~10）

















