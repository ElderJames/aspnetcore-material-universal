import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {

  columnsDemo;
  selectData;

  constructor(@Inject('dataTableService') private service) {
    this.service.select();

    this.columnsDemo = {
      columns: [
        {
          title: '姓名',
          key: 'name',
          // fixed: 'left'
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '省份',
          key: 'province',
        },
        {
          title: '市区',
          key: 'city',
        },
        {
          title: '地址',
          key: 'address',
        },
        {
          title: '邮编',
          key: 'zip',
        }
      ],
      columns1: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '姓名',
          key: 'name',
          // fixed: 'left'
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '省份',
          key: 'province',
        },
        {
          title: '市区',
          key: 'city',
        },
        {
          title: '地址',
          key: 'address',
        },
        {
          title: '邮编',
          key: 'zip',
        }
      ],
      columns2: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          width: 117,
          fixed: 'left'
        },
        {
          title: '年龄',
          key: 'age',
          width: 100
        },
        {
          title: '省份',
          key: 'province',
          width: 100
        },
        {
          title: '市区',
          key: 'city',
          width: 100
        },
        {
          title: '地址',
          key: 'address',
          width: 200
        },
        {
          title: '邮编',
          key: 'zip',
          width: 100
        }, {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 120,
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          province: '北京市',
          city: '朝阳区',
          zip: 100000
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗',
          province: '北京市',
          city: '海淀区',
          zip: 100000
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          province: '上海市',
          city: '浦东新区',
          zip: 100000
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          province: '广东',
          city: '南山区',
          zip: 100000
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          province: '上海市',
          city: '浦东新区',
          zip: 100000
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          province: '广东',
          city: '南山区',
          zip: 100000
        }
      ]
    };
  }

  ngOnInit() {
  }

  onSelectChange($event) {
    this.selectData = $event;
  }

}
