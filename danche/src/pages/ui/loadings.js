import React from "react";
import { Card, Spin, Icon, Alert } from "antd";
import "./ui.less";
export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />;
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />;

    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: "0 10px" }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="react "
            description="欢迎来到农夫山泉小组协会"
            type="info"
          />

          <Spin>
            <Alert
              message="react "
              description="欢迎来到农夫山泉小组协会"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中.....">
            <Alert
              message="react "
              description="欢迎来到农夫山泉小组协会"
              type="warning"
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="react "
              description="欢迎来到农夫山泉小组协会"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
