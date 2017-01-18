/**
@description 记录 详情
*/
define([////////
  // Require the theme of our choosing
  //"dojox/charting/themes/Claro",
  "appRestStore/statistics",
  //"dojo/_base/lang",
  //'cutil/c.util.common',
  //'cutil/c.util.validate',
  // Require the basic 2d chart resource
  /*
  "dojox/charting/Chart",
  "dojox/charting/plot2d/Pie",
  "dojox/charting/action2d/Tooltip",
  "dojox/charting/themes/Tom",
  "dojox/charting/widget/Legend",
  */
  'css!res/style/main_pc',/*css for kernel pc*/
],
function (
  claroTheme,
  restStores//,
  //lang,
  //utilCommon
  //,
  //validate
) {
  "use strict";
  var viewUtils = {
    hasValidFormData:function(opts){
      var self = this;
      var opts = opts || {};
      var postData = JSON.parse(JSON.stringify(self.vm.$data.formData));
      self.memoryStore.setAttr('memory.formData',postData);
      if(!postData.startDate){
        self.showToast({
          text:'请选择开始日期'
        });
        return false;
      }
      return postData;
    },

    fetchData:function(opts){
      var self = this;
      var queryParams = _.isObject(opts)?opts:'';
      restStores['statistics'].get(queryParams).then(function(resp){
        if(self.isSucceedResponse(resp)){
          /*
          var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
          => 6
          */
          self.viewData.statisticsData = resp.body;
          self.viewData.sumExpenses = _.reduce(_.pluck(resp.body.expenses,'y'),function(memo,num){
            return memo + num;
          },0);
          self.viewData.sumIncomes = _.reduce(_.pluck(resp.body.incomes,'y'),function(memo,num){
            return memo + num;
          },0);
          if(self.vm){
            self.vm.$set('sumExpenses',self.viewData.sumExpenses);
            self.vm.$set('sumIncomes',self.viewData.sumIncomes);
          }
          if(!self.expensePieChart){
            //显示收入
            self.model.trigger('renderChart',{
              pieChartName:'incomePieChart',
              legendId:'incomeLegend',
              chartId:'incomePieChart',
              chartData:self.viewData.statisticsData.incomes,
              seriesName:'Series Income',
              legendName:'incomeLegend '
            });
            //显示消费
            self.model.trigger('renderChart',{
              pieChartName:'expensePieChart',
              legendId:'expenseLegend',
              chartId:'expensePieChart',
              chartData:self.viewData.statisticsData.expenses,
              seriesName:'Series Expense',
              legendName:'expenseLegend '
            });
          }else{
            self.model.trigger('refreshChart');
          }
        }else{
          self.showResponseError(resp);
        }
      },function(resp){
        self.showResponseError(resp);
      });
    },

    search:function(e){
      var self = this;
      var postData = null;
      if(e && $(e.target).hasClass('form-disabled')){
        return false;
      }else{
        if((postData = $.proxy(viewUtils.hasValidFormData,self)())){
          self.model.trigger('fetchData',postData);
        }
      }
    },

    /**
    @description legendId chartId chartData seriesName legendName pieChartName
    */
    renderChart:function(opts){
      var self = this;
      var dc = dojox.charting;
      self[opts.pieChartName] = new dc.Chart(opts.chartId);
      self[opts.pieChartName].setTheme(claroTheme).addPlot("default", {
        type: "Pie",
        font: "normal normal 10pt Tahoma",
        fontColor: "#ccc",
        labelWiring: "#ccc",
        radius: 65,
        labelStyle: "columns",
        htmlLabels: true,
        startAngle: -10
      }).addSeries(opts.seriesName, opts.chartData);
      var anim_c = new dc.action2d.Tooltip(self[opts.pieChartName], "default");
      self[opts.pieChartName].render();//Also note that the Tooltip plugin must be assigned to the chart before the render method is called on the chart.
      self[opts.legendName] = new dojox.charting.widget.Legend({
        chart: self[opts.pieChartName],
        horizontal:false
      }, opts.legendId + self.viewContextPostfix);//创建legend
    },

    //更新数据显示
    refreshChart:function(){
      var self = this;
      self.expensePieChart.updateSeries("Series Expense", self.viewData.statisticsData.expenses);
      self.incomePieChart.updateSeries("Series Income", self.viewData.statisticsData.incomes);
      self.expensePieChart.render();
      self.incomePieChart.render();
      self['incomeLegend'] && self['incomeLegend'].refresh();
      self['expenseLegend'] && self['expenseLegend'].refresh();
    }
  };
  alert('viewUtils');
  return viewUtils;
});
