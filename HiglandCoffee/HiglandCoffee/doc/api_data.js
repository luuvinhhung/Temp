define({ "api": [
  {
    "type": "DELETE",
    "url": "/Branch/Delete?code={code}",
    "title": "",
    "group": "Branch",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"Xóa thành công\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy chi nhánh\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/BranchController.cs",
    "groupTitle": "Branch",
    "name": "DeleteBranchDeleteCodeCode"
  },
  {
    "type": "GET",
    "url": "/Branch/GetAll?page={page}&pageSize={pageSize}&filter={filter}",
    "title": "",
    "group": "Branch",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Thời gian tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>Người tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "UpdateDate",
            "description": "<p>Thời gian chỉnh sửa gần nhất</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UpdateBy",
            "description": "<p>Người chỉnh sửa gần nhất</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái của chi nhánh</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     Id:1,\n     BranchCode: \"B001\",\n     Name: \"HilandCoffee Số 1\",\n     Address: \"123 Bến Thành, TPHCM\",\n     PhoneNumber: \"0123456789\",\n     CreatedDate: 12/5/2018,\n     CreatedBy: \"admin\",\n     UpdateDate: 18/5/2018,\n     UpdateBy: \"admin\",\n     Status: \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/BranchController.cs",
    "groupTitle": "Branch",
    "name": "GetBranchGetallPagePagePagesizePagesizeFilterFilter"
  },
  {
    "type": "GET",
    "url": "/Branch/GetByCode?code={code}",
    "title": "",
    "group": "Branch",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Thời gian tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>Người tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "UpdateDate",
            "description": "<p>Thời gian chỉnh sửa gần nhất</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UpdateBy",
            "description": "<p>Người chỉnh sửa gần nhất</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái của chi nhánh</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     Id:1,\n     BranchCode: \"B001\",\n     Name: \"HilandCoffee Số 1\",\n     Address: \"123 Bến Thành, TPHCM\",\n     PhoneNumber: \"0123456789\",\n     CreatedDate: 12/5/2018,\n     CreatedBy: \"admin\",\n     UpdateDate: 18/5/2018,\n     UpdateBy: \"admin\",\n     Status: \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy chi nhánh\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/BranchController.cs",
    "groupTitle": "Branch",
    "name": "GetBranchGetbycodeCodeCode"
  },
  {
    "type": "POST",
    "url": "/Branch/Create",
    "title": "",
    "group": "Branch",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     BranchCode: \"B002\",\n     Name: \"Chi nhánh 2\",\n     Address: \"Hà nội\",\n     PhoneNumber: \"0112345689\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của chi nhánh vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Thời gian tạo vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>Người tạo vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "UpdateDate",
            "description": "<p>Thời gian chỉnh sửa gần nhất vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UpdateBy",
            "description": "<p>Người chỉnh sửa gần nhất vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái của chi nhánh vửa tạo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     Id:1,\n     BranchCode: \"B001\",\n     Name: \"HilandCoffee Số 1\",\n     Address: \"123 Bến Thành, TPHCM\",\n     PhoneNumber: \"0123456789\",\n     CreatedDate: 12/5/2018,\n     CreatedBy: \"admin\",\n     UpdateDate: 18/5/2018,\n     UpdateBy: \"admin\",\n     Status: \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Tên chi nhánh là trường bắt buộc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/BranchController.cs",
    "groupTitle": "Branch",
    "name": "PostBranchCreate"
  },
  {
    "type": "PUT",
    "url": "/Branch/Create",
    "title": "",
    "group": "Branch",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của chi nhánh</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại,</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái của chi nhánh</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     BranchCode: \"B002\",\n     Name: \"Chi nhánh 2\",\n     Address: \"Hà nội\",\n     PhoneNumber: \"0112345689\",\n     Status: \"True\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của chi nhánh vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "BranchCode",
            "description": "<p>Mã của chi nhánh vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Tên chi nhánh vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Address",
            "description": "<p>Địa chỉ vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Số điện thoại vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Thời gian tạo vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "CreatedBy",
            "description": "<p>Người tạo vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "UpdateDate",
            "description": "<p>Thời gian chỉnh sửa gần nhất vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "UpdateBy",
            "description": "<p>Người chỉnh sửa gần nhất vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái của chi nhánh vửa sửa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     Id:1,\n     BranchCode: \"B001\",\n     Name: \"HilandCoffee Số 1\",\n     Address: \"123 Bến Thành, TPHCM\",\n     PhoneNumber: \"0123456789\",\n     CreatedDate: 12/5/2018,\n     CreatedBy: \"admin\",\n     UpdateDate: 18/5/2018,\n     UpdateBy: \"admin\",\n     Status: \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": \"Tên chi nhánh là trường bắt buộc\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/BranchController.cs",
    "groupTitle": "Branch",
    "name": "PutBranchCreate"
  }
] });
